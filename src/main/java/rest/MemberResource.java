/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import model.DataFactory;

/**
 * REST Web Service
 *
 * @author TimmosQuadros
 */
@Path("member")
public class MemberResource {

    @Context
    private UriInfo context;
    private static DataFactory df = new DataFactory();;

    /**
     * Creates a new instance of MemberResource
     */
    public MemberResource() {
    }

    /**
     * Retrieves representation of an instance of rest.MemberResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("all")
    public String getJson() {
        
        return df.getMembersAsJson();
    }

    /**
     * PUT method for updating or creating an instance of MemberResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
