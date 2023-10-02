import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class BucketService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileID);
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileID) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileID); // returns url
    } catch (error) {
      throw error;
    }
  }
}

const bucketService = new BucketService();
export default bucketService;
