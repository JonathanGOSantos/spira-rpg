import { writable } from 'svelte/store';
import { enemyStore } from './enemy.js';

class Player {
  constructor(name) {
    this.player = true;
    this.name = name;
    this.health = 20;
    this['max-health'] = 20;
    this.attack = 2;
    this.defense = 0;
    this.atributes = {
      constitution: 1,
      strength: 1,
      resistance: 1,
      dexterity: 1,
    };
    this.level = 1;
    this.experience = 0;
    this.inventory = [];
    this.hit = [
      {
        type: 'hit',
        message: 'Seu ataque atinge em cheio o inimigo!',
      },
      {
        type: 'hit',
        message: 'Você desferiu um golpe preciso, causando dano ao inimigo!',
      },
      {
        type: 'hit',
        message: 'Com uma habilidade impressionante, você ataca o inimigo.',
      },
    ];
    this['critical-hit'] = [
      {
        type: 'critical',
        message:
          'Seu ataque atinge o ponto fraco do oponente, causando grande impacto!',
      },
      {
        type: 'critical',
        message:
          'Você acerta um golpe devastador, causando dano crítico ao inimigo!',
      },
      {
        type: 'critical',
        message: 'Seu golpe certeiro faz o inimigo cambalear!',
      },
    ];
    this['no-attack'] = [
      {
        type: 'miss',
        message: 'Você erra o ataque e sua arma corta apenas o ar.',
      },
      {
        type: 'miss',
        message:
          'Seu golpe é desviado pelo inimigo, deixando-o vulnerável por um momento.',
      },
      {
        type: 'miss',
        message: 'Você ataca, mas o inimigo bloqueia com facilidade.',
      },
      {
        type: 'miss',
        message:
          'Seu movimento foi mal calculado, e o golpe não acertou o alvo.',
      },
    ];
    this['no-damage'] = [
      {
        type: 'nodamage',
        message: 'O ataque inimigo não foi forte o suficiente para te ferir',
      },
    ];
    this.escape = [
      {
        type: 'success',
        message: 'Você aproveita uma abertura e foge rapidamente.',
      },
      {
        type: 'success',
        message: 'Com agilidade, você escapa antes que o inimigo possa reagir.',
      },
      {
        type: 'success',
        message: 'Uma distração bem planejada permite sua retirada do combate.',
      },
      {
        type: 'failure',
        message: 'Você tenta fugir, mas o inimigo te impede de escapar.',
      },
      {
        type: 'failure',
        message: 'O inimigo te impede de escapar, e você é forçado a lutar.',
      },
      {
        type: 'failure',
        message: 'Você tenta fugir, mas o inimigo te encurrala.',
      },
    ];
    this.moveForward = () => {
      const playerRoll = Math.random();
      return playerRoll;
    };
    this.relax = () => {
      const playerRoll = Math.random();
      return playerRoll;
    };
  }
}

const playerStore = writable({});

export { Player, playerStore };
