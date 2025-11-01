'use client';

import { useState } from 'react';
import { useMetadataManagement } from '@/hooks/useMetadata';
import { PageMetadata, CreateMetadataData, ApiError } from '@/services';

const MetadataManager: React.FC = () => {
  const {
    allMetadata,
    selectedMetadata,
    setSelectedMetadata,
    loadingAll,
    creating,
    updating,
    deleting,
    errorAll,
    createError,
    updateError,
    deleteError,
    fetchAllMetadata,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useMetadataManagement();

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState<CreateMetadataData>({
    page: '',
    title: '',
    description: '',
    keywords: [],
    locale: 'en',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (showEditForm && selectedMetadata) {
      await handleUpdate({ ...formData, id: selectedMetadata.id });
      setShowEditForm(false);
    } else {
      await handleCreate(formData);
      setShowCreateForm(false);
    }
    
    setFormData({
      page: '',
      title: '',
      description: '',
      keywords: [],
      locale: 'en',
    });
  };

  const handleEdit = (metadata: PageMetadata) => {
    setSelectedMetadata(metadata);
    setFormData({
      page: metadata.page,
      title: metadata.title,
      description: metadata.description,
      keywords: metadata.keywords,
      ogTitle: metadata.ogTitle,
      ogDescription: metadata.ogDescription,
      ogImage: metadata.ogImage,
      ogUrl: metadata.ogUrl,
      twitterTitle: metadata.twitterTitle,
      twitterDescription: metadata.twitterDescription,
      twitterImage: metadata.twitterImage,
      canonicalUrl: metadata.canonicalUrl,
      robots: metadata.robots,
      author: metadata.author,
      locale: metadata.locale,
    });
    setShowEditForm(true);
  };

  const handleDeleteClick = (id: string) => {
    if (confirm('Are you sure you want to delete this metadata?')) {
      handleDelete(id);
    }
  };

  if (loadingAll) {
    return <div className="loading">Loading metadata...</div>;
  }

  return (
    <div className="metadata-manager">
      <div className="metadata-manager-header">
        <h2>Metadata Management</h2>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="btn-primary"
        >
          Add Metadata
        </button>
      </div>

      {errorAll && (
        <div className="error">
          Error loading metadata: {errorAll.message}
        </div>
      )}

      {(showCreateForm || showEditForm) && (
        <MetadataForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowCreateForm(false);
            setShowEditForm(false);
            setFormData({
              page: '',
              title: '',
              description: '',
              keywords: [],
              locale: 'en',
            });
          }}
          loading={creating || updating}
          error={createError || updateError || null}
          isEdit={showEditForm}
        />
      )}

      <div className="metadata-list">
        {allMetadata?.map((metadata: PageMetadata) => (
          <div key={metadata.id} className="metadata-item">
            <div className="metadata-info">
              <h3>{metadata.title}</h3>
              <p><strong>Page:</strong> {metadata.page}</p>
              <p><strong>Description:</strong> {metadata.description}</p>
              <p><strong>Keywords:</strong> {metadata.keywords.join(', ')}</p>
              <p><strong>Locale:</strong> {metadata.locale}</p>
            </div>
            <div className="metadata-actions">
              <button 
                onClick={() => handleEdit(metadata)}
                className="btn-secondary"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDeleteClick(metadata.id)}
                className="btn-danger"
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MetadataFormProps {
  formData: CreateMetadataData;
  setFormData: React.Dispatch<React.SetStateAction<CreateMetadataData>>;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  loading: boolean;
  error: ApiError | null;
  isEdit: boolean;
}

const MetadataForm: React.FC<MetadataFormProps> = ({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  loading,
  error,
  isEdit,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'keywords') {
      setFormData((prev: CreateMetadataData) => ({
        ...prev,
        keywords: value.split(',').map(k => k.trim()).filter(k => k)
      }));
    } else {
      setFormData((prev: CreateMetadataData) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="metadata-form">
      <h3>{isEdit ? 'Edit Metadata' : 'Create Metadata'}</h3>
      {error && <div className="error">Error: {error.message}</div>}
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="page">Page</label>
          <input
            type="text"
            id="page"
            name="page"
            value={formData.page}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
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
          <label htmlFor="keywords">Keywords (comma-separated)</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords.join(', ')}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ogTitle">Open Graph Title</label>
          <input
            type="text"
            id="ogTitle"
            name="ogTitle"
            value={formData.ogTitle || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ogDescription">Open Graph Description</label>
          <textarea
            id="ogDescription"
            name="ogDescription"
            value={formData.ogDescription || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ogImage">Open Graph Image URL</label>
          <input
            type="url"
            id="ogImage"
            name="ogImage"
            value={formData.ogImage || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="canonicalUrl">Canonical URL</label>
          <input
            type="url"
            id="canonicalUrl"
            name="canonicalUrl"
            value={formData.canonicalUrl || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="locale">Locale</label>
          <select
            id="locale"
            name="locale"
            value={formData.locale || 'en'}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? (isEdit ? 'Updating...' : 'Creating...') : (isEdit ? 'Update' : 'Create')}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MetadataManager;
