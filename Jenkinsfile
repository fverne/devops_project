pipeline {
  agent {
    docker {
      image 'maven:3-alpine'
      args '-v /root/.m2:/root/.m2'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''mvn -B -DskipTests clean package
sudo docker run -d --name=postgres13 -p 5432:5432 -v postgres-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=Meme4321! -e POSTGRES_DB=hibernatedb postgres:latest
sudo docker build -t devops .
sudo docker run -p 8080:8080 devops'''
      }
    }

  }
  environment {
    HEROKUBUILD = 'true'
  }
}