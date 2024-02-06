package com.project.entity;

public class Answer {
	private int qno;
	private String qtext;
	private String submittedAnswer;
	private String originalAnswer;
	
	//{"qno":1, "qtext":"what is java", "submittedAnswer":"A", "originalAnswer":"B"}
	public int getQno() {
		return qno;
	}
	
	public void setQno(int qno) {
		this.qno = qno;
	}
	
	public String getQtext() {
		return qtext;
	}
	
	public void setQtext(String qtext) {
		this.qtext = qtext;
	}
	
	public String getSubmittedAnswer() {
		return submittedAnswer;
	}
	
	public void setSubmittedAnswer(String submittedAnswer) {
		this.submittedAnswer = submittedAnswer;
	}
	public String getOriginalAnswer() {
		return originalAnswer;
	}
	public void setOriginalAnswer(String originalAnswer) {
		this.originalAnswer = originalAnswer;
	}
	
	@Override
	public String toString() {
		return "Answer [qno=" + qno + ", qtext=" + qtext + ", submittedAnswer=" + submittedAnswer + ", originalAnswer="
				+ originalAnswer + "]";
	}
}