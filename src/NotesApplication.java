// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.web.bind.annotation.*;

// import java.util.ArrayList;
// import java.util.List;

// @SpringBootApplication
// @RestController
// public class NotesApplication {

//     private List<String> notes = new ArrayList<>();

//     public static void main(String[] args) {
//         SpringApplication.run(NotesApplication.class, args);
//     }

//     @GetMapping("/notes")
//     public List<String> getNotes() {
//         return notes;
//     }

//     @PostMapping("/notes")
//     public String addNote(@RequestBody String content) {
//         notes.add(content);
//         return "Note added successfully";
//     }
// }
