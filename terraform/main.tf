# Enable Cloud Run API
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
  disable_on_destroy = false
}

# Enable Artifact Registry API
resource "google_project_service" "ar_api" {
  service = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

# Enable Cloud Build API
resource "google_project_service" "cb_api" {
  service = "cloudbuild.googleapis.com"
  disable_on_destroy = false
}

# Artifact Registry Repository
resource "google_artifact_registry_repository" "repo" {
  location      = var.region
  repository_id = "cloud-run-source-deploy"
  description   = "Docker repository for Cloud Run"
  format        = "DOCKER"
  depends_on    = [google_project_service.ar_api]
}

# Cloud Build Trigger
resource "google_cloudbuild_trigger" "push_trigger" {
  name        = "ustestkitchen-deploy-main"
  description = "Trigger deployment on push to main branch"

  github {
    owner = var.github_owner
    name  = var.github_repo
    push {
      branch = "^main$"
    }
  }

  filename = "cloudbuild.yaml"

  depends_on = [google_project_service.cb_api]
}

# Grant Cloud Build Service Account access to Cloud Run
data "google_project" "project" {}

resource "google_project_iam_member" "cloudbuild_run_admin" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${data.google_project.project.number}@cloudbuild.gserviceaccount.com"
}

resource "google_project_iam_member" "cloudbuild_sa_user" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${data.google_project.project.number}@cloudbuild.gserviceaccount.com"
}
