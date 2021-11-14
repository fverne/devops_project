pipeline {
  agent any
  stages {
    stage('docker build') {
      steps {
        sh 'docker build -t devops .'
      }
    }

    stage('docker run') {
      steps {
        sh 'docker run -p 80:8080 devops'
      }
    }

  }
}