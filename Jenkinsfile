pipeline {
  agent any
  stages {
    stage("build"){
      steps {
        echo 'Building 🏗 the application...'
        nodejs('NodeJS') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    
     stage("test"){
      steps {
      echo 'Testing 🧪 the application...'
      }
    }
    
     stage("deploy"){
      steps {
        echo 'Deploying 🏬 the application...'
      }
    }
  }
}
