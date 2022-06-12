# Tabelas:

Informações das tabelas e colunas do banco de dados

## Eventos:

> Onde serão cadastrados os eventos

- ideventos – Sequencial inteiro , preenchimento automático
- diaEvento – Dia do evento , preenchimento digitado tela de eventos
- horaInicio – hora inicial do evento ,
- horaTermino – hora fim do evento preenchimento digitado tela de eventos
- tempExterna – Temperatura externa sala,preenchimento busca via api com base no dia e hora do evento
- tempSala – temperatura da sala , preenchimento com base na leitura do sensor tabela sensores
- tempDesejada temperatura desejada para sala , preenchimento digitado tela de eventos
- horaAcionamentoArCondicionado - preenchimento calculado com base hora inicio X temperatura externa

## Sala:

> Cadastro de salas

- idSala - Sequencial inteiro , preenchimento automático
- descricao – Descrição sala loca/nome sala , preenchimento digitado tela de salas
- pais – Pais onde se encontra a sala , preenchimento digitado tela de salas (este campo é necessário para utilização da api.
- estado – Estado onde se encontra a sala , preenchimento digitado tela de salas (este campo é necessário para utilização da api.
- cidade – cidade onde se encontra a sala , preenchimento digitado tela de salas (este campo é necessário para utilização da api.
- salaLocal– Local onde se encontra a sala , preenchimento digitado tela de salas .

## Sensores:

> Cadastro de sensores utilizados nas salas

- idSensor - Sequencial inteiro , preenchimento automático
- tipo – Tipo de sensor , preenchimento manual na tela de sensores (automatico , Manual)
- temperatura – Temperatura Registrada , caso seja tipo automático pegar do senhor no intervalo cadastrado , caso contrario pegar da tela temperatura coletada
- leitura- data e hora da leitura realizada , preenchimento automatico
- interLeitura – intervalo de leitura , preenchimento na tela de temperatura.
