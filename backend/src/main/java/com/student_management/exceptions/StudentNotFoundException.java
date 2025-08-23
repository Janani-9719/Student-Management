package com.student_management.exceptions;

import static com.student_management.utils.ErrorConstants.STUDENT_NOT_FOUND;

/**
 *
 */
public class StudentNotFoundException extends StudentManagementException {
    /**
     *
     * @param studentId
     */
    public StudentNotFoundException(final long studentId ) {
        super(STUDENT_NOT_FOUND + studentId);
    }
}
