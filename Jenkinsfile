pipeline {
  agent any
  stages {
    stage('Docker Network') {
      when {
        branch 'master'
      }
      steps {
        sh '''docker network create godinside || true
docker stop devops || true
docker stop postgres13 || true'''
      }
    }

    stage('postgres run') {
      when {
        branch 'master'
      }
      steps {
        sh 'docker run --rm --net godinside -d --name=postgres13 -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=Meme4321! -e POSTGRES_DB=hibernatedb postgres || true'
      }
    }

    stage('docker build') {
      when {
        branch 'master'
      }
      steps {
        sh 'docker build -t devops .'
      }
    }

    stage('docker run') {
      when {
        branch 'master'
      }
      steps {
        sh 'docker run --rm --net godinside -p 8080:8080 -d --name=devops devops'
      }
    }
  triggers {
    pollSCM('')
  }
  }
}