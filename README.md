# Пример развертывания react-приложения на Evolution Container Apps
Этот пример демонстрирует как развернуть веб-приложение разработанное на React в Evolution Container Apps за несколько шагов.
1. Необходимо собрать docker-образ для вашего приложения под платформу linux/amd64. В данном примере готовый Dockerfile находится в репозитории.

   `docker build --tag bondarevsky.cr.cloud.ru/react-hello-world https://github.com/evo/containerapp-react-sample.git#main --platform linux/amd64`
2. Необходимо загрузить собранный образ в Evolution Container Registry

   `docker login bondarevsky.cr.cloud.ru -u <keyid> -p <password>`
   
   `docker push bondarevsky.cr.cloud.ru/react-hello-world`
4. Из контекстного меню в Evolution Container Registry выберите Создать Container App. Необходимо указать порт контейнера в соотвествии с указанным в Dockerfile. В данном случае 80
   
   <img src="https://github.com/Mikhail2k15/containerapp-react-vite-sample/assets/11201670/f651ff07-f530-4b0c-96cb-d3acdef1e032" width="500px">
> [!IMPORTANT]
> Имя контейнера глобально уникальное и задается один раз при создании, по нему формируется публичный fqdn адрес для вашего приложения в формате `container-name.containers.cloud.ru` .

> [!TIP]
> Для получения публичного URL доступного в Интернет используйте опцию Автоматическая публикация

> [!TIP]
> Для автоматического развертывания новой ревизии приложения при каждом обновлении образа по тегу используйте опцию Автоматическое развертывание и маску тега

4. Ваше приложение готово и доступно по публичному адресу в формате `container-name.containers.cloud.ru`
