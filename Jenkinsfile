pipeline {
  agent any
  stages {
    stage("build"){
      steps {
        echo 'Building the application...'
        script {
        def test = 2+2 > 5 ? 'cool': 'not cool'
        echo test
        }
      }
    }
    
     stage("test"){
      steps {
      echo 'Testing the application...'
      }
    }
    
     stage("deploy"){
      steps {
        echo 'Deploying the application...'
      }
    }
  }
}
