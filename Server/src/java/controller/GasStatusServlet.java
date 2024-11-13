package controller;

import com.google.gson.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;

/**
 *
 * @author Yasas Banuka
 */
@WebServlet(name = "GasStatusServlet", urlPatterns = {"/gasStatus"})
public class GasStatusServlet extends HttpServlet {

    private String gasLevel = "0";  // Default gas level
    private String gasStatus = "Safe";  // Default gas status

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Get the data sent in the POST request
        String level = request.getParameter("level");
        String status = request.getParameter("status");

        // Update the gas level and status if new values are provided
        if (level != null) {
            gasLevel = level;  // Update gas level
        }
        if (status != null) {
            gasStatus = status;  // Update gas status
        }

        // Respond with a confirmation message
        response.setContentType("text/plain");
        response.getWriter().write("Gas level updated successfully.");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Create a JSON object using Gson
        JsonObject jsonResponse = new JsonObject();
        jsonResponse.addProperty("level", gasLevel);  // Send current gas level
        jsonResponse.addProperty("status", gasStatus);  // Send current gas status

        // Set response type to JSON and send the response
        response.setContentType("application/json");
        response.getWriter().write(jsonResponse.toString());
    }
}
