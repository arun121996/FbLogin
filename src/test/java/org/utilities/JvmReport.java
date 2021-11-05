package org.utilities;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generatejvmreport(String jsonpath) {
		
		File f = new File(System.getProperty("user.dir")+"\\target\\report");
		
		
		Configuration con = new Configuration(f,"FacebookApplication");
		con.addClassifications("browser","chrome");
		con.addClassifications("platform","windows");
		con.addClassifications("sprint", "15");
		
		
		List<String> li = new ArrayList<String>();
		li.add(jsonpath);

		ReportBuilder r = new ReportBuilder(li, con);
		
		r.generateReports();
	}
}
