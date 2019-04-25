### Set up Lombok plugin
1. Set up Annotation processing setting: 
    ```
    Settings (Ctrl + Alt + S) -> Build, Execution, Deployment -> Compiler -> Annotation Processors -> Enable annotation processing
    ```  
2. Install Lombok plugin:
    ```
    Settings (Ctrl + Alt + S) -> Plugins
    Search for "Lombok Plugin"
    Click Browse repositories...
    Choose Lombok Plugin
    Install
    Restart IntelliJ
    ```    

Create docker database instance (for local run):
docker run --name lucene --env POSTGRES_DB=lucene --env POSTGRES_USER=postgres --env POSTGRES_PASSWORD=postgres -p 5432:5432 --restart=always -d postgres:9.6.10
