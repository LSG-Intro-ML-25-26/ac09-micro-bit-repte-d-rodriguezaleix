// REPTE 4: Temperatura [cite: 1]
// Comprueba constantemente la temperatura
basic.forever(function () {
    // Si la temperatura es mayor de 22 grados, dice "calor" [cite: 6, 10]
    // Si es menor o igual, dice "fred" [cite: 6, 12]
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
// REPTE 5: Luz y Música [cite: 21]
// Comprueba constantemente el nivel de luz
basic.forever(function () {
    // Si hay mucha luz (> 200), melodía alegre [cite: 31, 32]
    // Si hay poca luz (< 50), melodía tranquila [cite: 33, 34]
    if (input.lightLevel() > 200) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        // Pausa para no repetir la música demasiado rápido
        basic.pause(2000)
    } else if (input.lightLevel() < 50) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.pause(2000)
    }
})
