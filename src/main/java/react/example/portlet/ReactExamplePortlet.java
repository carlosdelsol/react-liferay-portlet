package react.example.portlet;

import react.example.constants.ReactExamplePortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author carlosdelsol
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.display-name=react-example Portlet",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + ReactExamplePortletKeys.ReactExample,
		"javax.portlet.resource-bundle=content.Language",
	    "com.liferay.portlet.footer-portlet-javascript=/dist/app.js",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class ReactExamplePortlet extends MVCPortlet {
}