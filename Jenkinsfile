
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def status = bat(
                        script: 'npx playwright test',
                        returnStatus: true
                    )
                    bat 'dir'
                    bat 'dir playwright-report'

                    if (status != 0) {
                        echo 'Tests failed, but continuing to generate reports...'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Generating HTML reports...'

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true
            ])
        }
    }
}

