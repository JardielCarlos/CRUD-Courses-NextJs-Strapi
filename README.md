<h1 align="center" style="font-weight: bold;">CRUD-Courses-NextJs-Strapi 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
<a href="#objective">Objective</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>Descrição simples do que o projeto faz e como usá-lo.</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- lista de todas as tecnologias usada
- NextJs
- Strapi
- Axios
- Sqlite

<h2 id="objective">💡 Objective</h2>

Esse projeto tem o intuito de demonstra o funcionamento de um CRUD utilizando duas tecnologias muito utilizadas, uma no front que é o NextJs e no back um CMS chamado strapi que ajuda no desenvolvimento rápido da aplicação.

<h2 id="started">🚀 Getting started</h2>

- ### Como executar o projeto localmente.

<h3>Prerequisites</h3>

lista de todos os pré-requisitos necessários para execução do projeto.

- [Node](https://nodejs.org/en)

<h3>Cloning</h3>

Como clonar o projeto

```bash
git clone https://github.com/JardielCarlos/CRUD-Courses-NextJs-Strapi.git
```

<h3>Initialize</h3>
Inicializar a node_modules

```bash
npm install
```

Start da aplicação

```bash
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

lista das rotas da API e quais são os corpos de solicitação esperados.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>GET /courses</kbd> | Listar os cursos [detalhes da resposta](#get-courses-details)
| <kbd>POST /courses</kbd> | Cria um novo curso [detalhes do envio e resposta](#post-courses-details)
| <kbd>PUT /courses/:id</kbd> | Atualizar um curso [detalhes do envio e resposta](#put-courses-details)
| <kbd>DELETE /courses/:id</kbd> | Deletar um curso [detalhes da resposta](#delete-courses-details)


<h3 id="get-courses-details">GET /courses</h3>

**RESPONSE**

```json
{
	"data": [
		{
			"id": 2,
			"attributes": {
				"name": "Curso fundamentos do NextJs ",
				"description": "Curso voltado para o público front-end que deseja da up na sua carreira conhecendo uma ferramenta de alto desempenho no seu desenvolvimento. Curso que traz toda a teoria de como funciona o nextjs",
				"tags": [
					"NextJs",
					"JavaScript",
					"Axios",
					"Html",
					"TailwindCss"
				],
				"createdAt": "2024-04-13T21:48:25.788Z",
				"updatedAt": "2024-04-13T21:48:25.788Z",
				"publishedAt": "2024-04-13T21:48:25.780Z"
			}
		}
  ]
}
```

<h3 id="post-courses-details">POST /courses</h3>

**REQUEST**

```json
{
	"data": {
		"name": "Curso de HTML",
		"description": "curso para iniciantes aprenderem HTML",
		"tags": ["html", "programação"]
	}
}
```

**RESPONSE**

```json
{
	"data": {
		"id": 5,
		"attributes": {
			"name": "Curso de HTML",
			"description": "curso para iniciantes aprenderem HTML",
			"tags": [
				"html",
				"programação"
			],
			"createdAt": "2024-04-13T22:06:31.288Z",
			"updatedAt": "2024-04-13T22:06:31.288Z",
			"publishedAt": "2024-04-13T22:06:31.282Z"
		}
	},
	"meta": {}
}
```

<h3 id="put-courses-details">PUT /courses/5</h3>

**REQUEST**


```json
{
	"data": {
		"name": "Curso de HTML 2.0",
		"description": "curso para iniciantes aprenderem HTML",
		"tags": ["html", "programação"]
	}
}
```

**RESPONSE**

```json
{
	"data": {
		"id": 5,
		"attributes": {
			"name": "Curso de HTML 2.0",
			"description": "curso para iniciantes aprenderem HTML",
			"tags": [
				"html",
				"programação"
			],
			"createdAt": "2024-04-13T22:06:31.288Z",
			"updatedAt": "2024-04-13T22:08:45.241Z",
			"publishedAt": "2024-04-13T22:06:31.282Z"
		}
	},
	"meta": {}
}
```
<h3 id="delete-courses-details">DELETE /courses/5</h3>

**RESPONSE**

```json
{
	"data": {
		"id": 5,
		"attributes": {
			"name": "Curso de HTML 2.0",
			"description": "curso para iniciantes aprenderem HTML",
			"tags": [
				"html",
				"programação"
			],
			"createdAt": "2024-04-13T22:06:31.288Z",
			"updatedAt": "2024-04-13T22:08:45.241Z",
			"publishedAt": "2024-04-13T22:06:31.282Z"
		}
	},
	"meta": {}
}
```

<h2 id="colab">🤝 Collaborators</h2>

Participantes do Projeto

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/88459973?v=4" width="100px;" alt="Jardiel Carlos Profile Picture"/><br>
        <sub>
          <b>Jardiel Carlos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Para contribuir para este projeto, siga os passos abaixo:

1. `git clone https://github.com/JardielCarlos/CRUD-Courses-NextJs-Strapi.git`
2. `git checkout -b feature/NAME`
3. Abra um Pull Request explicando o problema resolvido ou recurso realizado, se existir, anexe screenshot das modificações visuais e aguarde a revisão!

<h3>Documentações que podem ajudar</h3>

[📝 Como criar uma solicitação pull request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)
