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
        sh 'docker run -p 8080:8080 devops'
      }
    }

  }
}