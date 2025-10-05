'use client';

import { useState } from 'react';
import { useApi, useApiMutation } from '@/hooks/useApi';
import { productService, Product, CreateProductData } from '@/services';

const ProductList: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  // Fetch products
  const { 
    data: products, 
    loading: productsLoading, 
    error: productsError, 
    execute: fetchProducts 
  } = useApi(productService.getProducts, true);

  // Create product mutation
  const { 
    data: createdProduct, 
    loading: createLoading, 
    error: createError, 
    mutate: createProduct 
  } = useApiMutation(productService.createProduct);

  const handleCreateProduct = async (productData: CreateProductData) => {
    try {
      await createProduct(productData);
      setShowCreateForm(false);
      // Refresh products list
      await fetchProducts();
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await productService.deleteProduct(id);
        // Refresh products list
        await fetchProducts();
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  if (productsLoading) {
    return <div className="loading">Loading products...</div>;
  }

  if (productsError) {
    return <div className="error">Error: {productsError.message}</div>;
  }

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h2>Products</h2>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="btn-primary"
        >
          Add Product
        </button>
      </div>

      {showCreateForm && (
        <CreateProductForm 
          onSubmit={handleCreateProduct}
          onCancel={() => setShowCreateForm(false)}
          loading={createLoading}
          error={createError}
        />
      )}

      <div className="products-grid">
        {products?.products?.map((product: Product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.images?.[0] && (
                <img src={product.images[0]} alt={product.name} />
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">${product.price}</div>
              <div className="product-category">{product.category}</div>
              <div className="product-actions">
                <button 
                  onClick={() => handleDeleteProduct(product.id)}
                  className="btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface CreateProductFormProps {
  onSubmit: (data: CreateProductData) => void;
  onCancel: () => void;
  loading: boolean;
  error: any;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({
  onSubmit,
  onCancel,
  loading,
  error
}) => {
  const [formData, setFormData] = useState<CreateProductData>({
    name: '',
    description: '',
    price: 0,
    category: '',
    images: [],
    specifications: {},
    availability: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  return (
    <div className="create-product-form">
      <h3>Create New Product</h3>
      {error && <div className="error">Error: {error.message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Product'}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductList;
