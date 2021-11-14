pipeline {
  agent any
  stages {
    stage('Docker Network') {
      steps {
        sh 'docker network create godinside'
      }
    }

    stage('postgres run') {
      steps {
        sh 'docker run --rm --net godinside -d --name=postgres13 -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=Meme4321! -e POSTGRES_DB=hibernatedb postgres'
      }
    }

    stage('docker build') {
      steps {
        sh 'docker build -t devops .'
      }
    }

    stage('docker run') {
      steps {
        sh 'docker run --rm --net godinside -p 8080:8080 -d devops'
      }
    }

  }
}