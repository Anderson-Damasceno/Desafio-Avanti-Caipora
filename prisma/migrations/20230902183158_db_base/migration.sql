-- CreateTable
CREATE TABLE "jogadores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "timeId" INTEGER NOT NULL,

    CONSTRAINT "jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "fundacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeCampeonato" (
    "timeId" INTEGER NOT NULL,
    "campeonatoId" INTEGER NOT NULL,

    CONSTRAINT "TimeCampeonato_pkey" PRIMARY KEY ("timeId","campeonatoId")
);

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCampeonato" ADD CONSTRAINT "TimeCampeonato_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCampeonato" ADD CONSTRAINT "TimeCampeonato_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
