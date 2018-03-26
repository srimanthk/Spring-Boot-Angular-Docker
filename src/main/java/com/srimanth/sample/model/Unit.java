package com.srimanth.sample.model;

import java.io.Serializable;

/**
 * Created by lenovo on 12/2/2017.
 */
public class Unit implements Serializable {
    private static final long serialVersionUID = 1L;

    private String input;

    private String result;

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

}
