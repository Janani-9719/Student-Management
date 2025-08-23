package com.student_management.exceptions;

import java.time.LocalDateTime;

/**
 *
 * @param error
 * @param message
 * @param path
 * @param timestamp
 */
public record ErrorResponse(
        String error,
        String message,
        String path,
        LocalDateTime timestamp
) {
    //record is an immutable data carrier perfect for ErrorResponse, all the variables are final by default

    public static ErrorResponse of(String error, String message, String path){
        return new ErrorResponse(error,message,path,LocalDateTime.now());
        //use of() method instead of always calling the constructor, inside the constructor is being called
    }
}
