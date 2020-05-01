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
        stage('Docker Push'){
            steps{
                script{
                    docker.withRegistry('https://688106924677.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:nvnrvi2') {
                        docker.image('apprepo').push('latest')
                    }
                }
            }
        }
        stage('ECS service deploy'){
            steps{
                sh "aws ecs update-service --cluster nodecluster --service nodeservicetest --force-new-deployment --region us-east-1"
            }
        }
    }
}