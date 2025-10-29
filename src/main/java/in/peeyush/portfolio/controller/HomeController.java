package in.peeyush.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.service.annotation.GetExchange;

@Controller
public class HomeController {

    @GetMapping({"","/","/home"})
    public String showHomepage(){
            return "home";
    }
}
