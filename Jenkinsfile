pipeline {
  agent any
  stages {
    stage('docker build / docke run') {
      steps {
        sh '''docker build -t devops .
docker run -p 8080:8080 devops'''
      }
    }

  }
}