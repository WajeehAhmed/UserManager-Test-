pipeline {
  agent any
  stages {
    stage("build"){
      steps {
        echo 'Building 🏗 the application...'
        echo '1'
        echo '2'
        echo '3'
        echo '......'
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
