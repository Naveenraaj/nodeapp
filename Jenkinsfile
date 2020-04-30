pipeline{
    agent any
    stages{
        stage('Docker build'){
            steps{
                sh '''
                    docker run hello-world
                '''
            }
        }
    }
}