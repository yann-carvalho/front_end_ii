#prof1244@iesp.edu.br#

alturas = []
generos = []

for i in range (3):
    altura = float(input('Informe sua altura: '))
    alturas.append(altura)
    genero = input('Qual seu gênero? Informe "M" para masculino e "F" para feminino: ').upper()
    generos.append(genero)

maior = max(alturas)
menor = min(alturas)

total_homens = generos.count('M')
total_mulheres = generos.count('F')
soma_altura_homens = 0

for i in range(len(generos)):
    if generos[i] == "M":
        soma_altura_homens += alturas[i]

if total_homens == 0:
    total_homens = 0
else:
    media_alt_homens = soma_altura_homens / total_homens

print(alturas)
print(generos)
print(f'A maior altura é {maior}')
print(f'A menor altura é {menor}')
if total_homens > 0:
    print(f'A média de altura dos homens é {media_alt_homens:.2f}.')
print(f'A quantidade total de mulheres é {total_mulheres}.')