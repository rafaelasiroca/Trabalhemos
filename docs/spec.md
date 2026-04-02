🛠️ Especificação Técnica (Tech Spec) - Trabalhemos

Este documento descreve a estrutura técnica, o modelo de dados e o funcionamento básico da aplicação Trabalhemos.7

| Tipo   | Campo     | Descrição                                    |
| ------ | --------- | -------------------------------------------- |
| string | id        | Identificador único (gerado automaticamente) |
| string | nome      | Nome do trabalhador                          |
| string | cpf_cnpj  | Documento para identificação                 |
| string | descricao | Descrição do serviço prestado                |
| string | curriculo | Arquivo ou link (opcional)                   |
| string | contato   | Telefone ou outro meio de contato            |

2. Relacionamentos

    Neste MVP, o sistema possui apenas uma entidade principal:

    Um trabalhador possui um único perfil.
    Não há relacionamento com outras tabelas no momento.
3. API (Simulada com JSON Server)

    A aplicação utiliza um JSON Server para simular um backend.

📌 Endpoints principais:
GET /trabalhadores
Lista todos os trabalhadores cadastrados
GET /trabalhadores/:id
Retorna os dados de um trabalhador específico
POST /trabalhadores
Cria um novo trabalhador
PUT /trabalhadores/:id
Atualiza os dados do trabalhador
DELETE /trabalhadores/:id
Remove um trabalhador


4. Exemplo de Dados (db.json)
{
  "trabalhadores": [
    {
      "id": "1",
      "nome": "João Silva",
      "cpf_cnpj": "12345678900",
      "descricao": "Pedreiro com 10 anos de experiência",
      "curriculo": "",
      "contato": "11999999999"
    }
  ]
}


