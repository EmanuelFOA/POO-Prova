class ConversaoDeUnidadesDeTempo {

    static converterMinutoEmSegundos(minutos: number) {
      const umMinutoEmSegundos = 60;
      return minutos * umMinutoEmSegundos;
    }
  
    static converterHorasEmMinutos(horas: number) {
      const umaHoraEmMinutos = 60;
      return umaHoraEmMinutos * horas;
    }
  
    static converterDiaEmHoras(dias: number) {
      const umDiaEmHoras = 24;
      return dias * umDiaEmHoras;
    }
  
    static converterSemanaEmDias(semanas: number) {
      const umaSemanaEmDias = 7;
      return umaSemanaEmDias * semanas;
    }
  
    static converterMesEmDias(meses: number) {
      const umMesEmDias = 30;
  
      return meses * umMesEmDias;
    }
  
    static anosconvercao(anos: number) {
      const umAnoEmDias = 365.25;
      return anos * umAnoEmDias;
    }
  }

  console.log(`${5} minutos são ${ConversaoDeUnidadesDeTempo.converterMinutoEmSegundos(10)} segundos`)
  console.log(`${66} horas são ${ConversaoDeUnidadesDeTempo.converterHorasEmMinutos(12)} minutos`)
  console.log(`${7} dias são ${ConversaoDeUnidadesDeTempo.converterDiaEmHoras(5)} horas`)
  console.log(`${8} semanas são ${ConversaoDeUnidadesDeTempo.converterSemanaEmDias(11)} dias`)
  console.log(`${11} meses são ${ConversaoDeUnidadesDeTempo.converterMesEmDias(13)} dias`)
  console.log(`${2} ano são ${ConversaoDeUnidadesDeTempo.anosconvercao(10)} dias`)