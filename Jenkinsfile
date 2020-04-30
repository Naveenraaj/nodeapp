pipeline{
    agent any
    stages{
        stage('Docker build'){
            steps{
                script{
                    docker.build('apprepo')
                }                
            }
        }
    }
}