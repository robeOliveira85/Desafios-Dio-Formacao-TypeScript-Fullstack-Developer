let totalDeDias = parseInt(gets());

let qtdAnos = 0;
qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

let qtdMeses= 0;
qtdMeses = parseInt(totalDeDias / 30);
totalDeDias = totalDeDias % 30;

print(`${qtdAnos} ano(s)
       ${qtdMeses} mes(es)
       ${totalDeDias} dia(s)`);