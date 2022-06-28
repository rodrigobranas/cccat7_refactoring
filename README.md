Estrutura dos testes:

Given, When e Then ou Arrange, Act e Assert

Code Smells:

1 - Nomes estranhos

renomear variável OK
renomear função ou método OK
renomear arquivo
renomear pasta

2 - Números mágicos

extrair constante
extrair variável explicativa
extrair enum

3 - Comentários útil, que explica alguma coisa

extrair variável explicativa
extrair função ou método

4 - Código comentado e morto

apagar comentário

5 - Linhas em branco

apagar linhas em branco

6 - Retornos estranhos (códigos numéricos)
depende da linguagem

utilizar algum tipo de tratamento de errors/exceptions ou outro tipo de result pattern

7 - Condições confusas

extrair a condição extensa para uma função ou método
introduzir cláusulas guarda
consolidar condições

8 - Falta de tratamento de erros ou exceções

utilizar algum tipo de tratamento de errors/exceptions ou outro tipo de result pattern

9 - Método longo

Quebra do SRP, Single Responsibility Principle: Devemos separar coisas que mudam por motivos diferentes
Quebra do OCP, Open/Closed Principle: Devemos estar abertos para extensão e fechados para modificação
