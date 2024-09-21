# Gerenciamento de estoque

- Rastrear cada produto individualmente, através de um UUID ou de características do produto(Tamanho e cor).

- Definir quantidades mínimas de estoque, um número mínimo de certo produto, para que quando o produto estiver perto do número mínimo, ele possa receber um alerta.

- Enviar esses alertas através do e-mail e pop-ups no sistema.

- Criar:

  - Histórico de vendas: Ver a quantidades de vendas de um produto filtrando por período; o lucro gerado por produto; quais produtos estão vendendo melhor em cada período
  - Histórico de estoque

- Criação e gerenciamento de ordens de compra automáticas, baseadas na quantidade mínimas de estoque definidas e tendências de vendas.

- Integração com o sistema dos fornecedores, para receber os prazos de entregas.

## Quais as entidades de domínio?

- Estoquista
- Estoque
- Produto
- Venda
- Ordem de Compra
- Fornecedor

## Quais casos de uso?

- Cadastro-produto
- Rastrear-produto
- Quantidade-estoque
- Disparo-alerta
- Historico-vendas
- Historico-estoque
- Compra-produto
- Gerenciar-ordem-compra
- Gerenciar-fornecedores
- Emitir-relatorios
