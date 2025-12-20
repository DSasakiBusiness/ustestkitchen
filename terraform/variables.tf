variable "project_id" {
  description = "The GCP Project ID"
  type        = string
  default     = "zeronine-website-main"
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "us-central1"
}

variable "service_name" {
  description = "Cloud Run Service Name"
  type        = string
  default     = "ustestkitchen"
}

variable "github_owner" {
  description = "GitHub Repository Owner"
  type        = string
  default     = "DSasakiBusiness" # Updated to match created repo
}

variable "github_repo" {
  description = "GitHub Repository Name"
  type        = string
  default     = "ustestkitchen"
}
