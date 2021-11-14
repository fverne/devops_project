pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('error') {
      steps {
        echo 'finished xD'
        sh '''docker build -t devops .
docker run -p 80:8080 devops'''
      }
    }

  }
  environment {
    HEROKUBUILD = 'true'
  }
}