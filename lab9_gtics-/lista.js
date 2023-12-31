app.get("/trabajadores", function(req, res) {
    conn.query("select * from trabajadores", function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

app.get("/sedes", function(req, res) {
    conn.query("select * from sedes", function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

app.get("/trabajadores/:dni", function(req, res) {
    let trabajadorid = req.params.dni;
    let sql = "select trabajadores.nombres as nombre, trabajadores.apellidos as apellido, trabajadores.dni as dni, trabajadores.correo as correo, trabajadores.idsede as idsede, sedes.nombreSede as nombre_sede from trabajadores inner join sedes on trabajadores.idsede = sedes.idsede where dni = ?";
    let params = [trabajadorid]
    conn.query(sql, params, function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

app.get("/trabajadores/ventas/:dni", function(req, res) {
    let trabajadorid = req.params.dni;
    let sql = "select trabajadores.nombres as nombre, trabajadores.apellidos as apellido, trabajadores.dni as dni, trabajadores.correo as correo, trabajadores.idsede as idsede, sedes.nombreSede as nombre_sede from trabajadores inner join sedes on trabajadores.idsede = sedes.idsede where dni = ?";
    let params = [trabajadorid]
    conn.query(sql, params, function(err, results) {
        if (err) throw err;
        res.json(results);
    });
});

