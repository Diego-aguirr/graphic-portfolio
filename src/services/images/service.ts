import { ImageRecord } from "@/services/data/types";

export interface ImageServiceInterface {
  uploadImage(file: File): Promise<ImageRecord>;
  deleteImage(id: string): Promise<void>;
  getPublicUrl(id: string): string;
}

export const imageService: ImageServiceInterface = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async uploadImage(_file: File): Promise<ImageRecord> {
    throw new Error("Image service not configured for demo deployment");
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async deleteImage(_id: string): Promise<void> {
    throw new Error("Image service not configured for demo deployment");
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPublicUrl(_id: string): string {
    throw new Error("Image service not configured for demo deployment");
  },
};
