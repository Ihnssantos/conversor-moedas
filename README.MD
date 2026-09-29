# Conversor de Moedas 💱

Aplicação full-stack desenvolvida para praticar conceitos de Engenharia de Software, React, Node.js, consumo de APIs REST e containerização com Docker.

### Tecnologias

- Frontend: React, JavaScript, HTML e CSS.
- Backend: Node.js e Express.
- Integração: API externa de cotações.
- Infraestrutura: Docker e Docker Compose.
- Versionamento: Git e GitHub.

### Funcionalidades

- Conversão entre BRL, USD e EUR.
- Consulta de cotações através de API externa.
- Validação dos valores informados.
- Tratamento básico de erros.
- Interface responsiva.

### Executando com Docker

Com Docker instalado e em execução, na raiz do projeto:

```bash
docker compose up --build
```

Acesse:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

Para encerrar:

```bash
docker compose down
```

### Arquitetura

Usuário → React → Node.js/Express → API externa → Node.js → React.

### Objetivo

Aplicar, em um projeto simples, conceitos de levantamento de requisitos, arquitetura, implementação, integração entre sistemas, versionamento e containerização.

Projeto desenvolvido para fins de estudo e evolução profissional.
