pipeline{
    agent any
    stages{
        stage('Docker build'){
            steps{
                sh '''
                    echo "starting docker build
                '''
                docker.build('apprepo')
            }
        }
    }
}