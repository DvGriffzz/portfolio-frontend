export interface Project {
  id: number;
  title: string;
  description: string;
  imagePublicId: string;
  link: string;
  createdAt: string; // LocalDateTime comes as ISO string from Spring Boot
}