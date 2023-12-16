package yes;

import static spark.Spark.*;

import java.util.ArrayList;
import java.util.List;

public final class App {
    private static List<String> historial = new ArrayList<>();

    private App() {
    }

    public static void main(String[] args) {


        // Ruta para manejar la solicitud POST del formulario
        post("/guardarCantidad", (request, response) -> {
            String quantity = request.queryParams("quantity");

            System.out.println("Cantidad de filas: " + quantity);

            // Agregar la cantidad al historial
            historial.add(quantity);


            return "Cantidad de filas guardada: " + quantity;
        });


        get("/historial", (request, response) -> {

            return String.join(", ", historial);
        });
    }
}