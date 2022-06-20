/////CONTA BANCÁRIA/////
class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //underline mostra que o parametro usa um get/set
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        //temos que verificar se pode sacar
        if (valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;

        //fez um saque? mostra o que sobrou
        return this._saldo; 
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        //fez deposito? vamos mostrar o saldo 
        return this._saldo;
    }
}

/////CONTA CORRENTE/////
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero) //acessa a classe pai passando os valores destas propriedades
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

/////CONTA POUPANÇA/////
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero) //acessa a classe pai passando os valores destas propriedades
        this.tipo = 'poupança';
    }
}

/////CONTA UNIVERSITÁRIA/////
class ContaUniversitaria extends ContaBancaria  {
    constructor(agencia, numero) {
        super(agencia, numero) //acessa a classe pai passando os valores destas propriedades
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação Negada!';
        }

        this._saldo = this._saldo - valor;
    }
}