import { CSRDetailPageData } from '@/types/general';
import apiService, { ApiResponse } from './api';

export interface SubscribeRequest {
  email: string;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
}

class SubscriptionService {
  // private basePath = '/subscribe';

  /**
   * Subscribe a user to the newsletter.
   * @param data {SubscribeRequest}
   * @returns {Promise<ApiResponse<SubscribeResponse>>}
   */
  async subscribe(data: SubscribeRequest): Promise<ApiResponse<SubscribeResponse>> {
    // The endpoint is /subscribe, method POST, body: { email }
    return apiService.post<SubscribeResponse>("/subscribe", data);
  }

  async menuList(): Promise<ApiResponse<SubscribeResponse>> {
    // The endpoint is /subscribe, method POST, body: { email }
    return apiService.get<SubscribeResponse>("/menus");
  }
  async pageData(page: string): Promise<ApiResponse<SubscribeResponse>> {
    // The endpoint is /subscribe, method POST, body: { email }
    return apiService.get<SubscribeResponse>(`/page/${page}`);
  }
  async blogDetailData(page: string): Promise<ApiResponse<CSRDetailPageData>> {
    // The endpoint is /subscribe, method POST, body: { email }
    return apiService.get<CSRDetailPageData>(`/${page}`);
  }
}

const subscriptionService = new SubscriptionService();
export default subscriptionService;
