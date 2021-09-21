pipeline {
  agent any
  stages {
    stage("build"){
      steps {
        echo 'Building 🏗 the application...'
        echo 'Working...'
        nodejs('NodeJS') {
          sh 'npm install'
          sh 'npm run build'
        }
         echo 'Built Complete!!!'
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
