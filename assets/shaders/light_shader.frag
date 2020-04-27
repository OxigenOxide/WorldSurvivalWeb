precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
uniform sampler2D u_sampler2D;
varying vec4 v_newColor;
varying vec2 v_size;
varying vec2 v_pos;
varying float v_radius;
void main(){
    v_size=vec2(150,150);
    vec4 color;
    v_pos= vec2(floor(v_texCoord0.x*v_size.x)/v_size.x,floor(v_texCoord0.y*v_size.y)/v_size.y);
    //vec4 color = texture2D(u_sampler2D, vec2(floor(v_texCoord0.x*v_size.x)/v_size.x,floor(v_texCoord0.y*v_size.y)/v_size.y)) * v_color;
    float dist=sqrt(pow(v_pos.x-.5f,2)+pow(v_pos.y-.5f,2));
    color=vec4(0,0,0,0);

    dist=dist/(v_radius);
    /*
    if(dist<.5f)
        color=vec4(v_color.r,v_color.g,v_color.b,pow(dist*2-1,2)*v_color.a);
*/

/*
    if(dist<.5f)
        color=vec4(v_color.r,v_color.g,v_color.b,.1f*v_color.a);
    if(dist<.35f)
        color=vec4(v_color.r,v_color.g,v_color.b,.25f*v_color.a);
    if(dist<.2f)
        color=vec4(v_color.r,v_color.g,v_color.b,.5f*v_color.a);
    if(dist<.125f)
        color=vec4(v_color.r,v_color.g,v_color.b,.75f*v_color.a);
    if(dist<.05f)
        color=vec4(v_color.r,v_color.g,v_color.b,1f*v_color.a);
*/
    if(dist<.5f)
            color=vec4(v_color.r,v_color.g,v_color.b,.25f*v_color.a);
        if(dist<.35f)
            color=vec4(v_color.r,v_color.g,v_color.b,.5f*v_color.a);
        if(dist<.2f)
            color=vec4(v_color.r,v_color.g,v_color.b,1f*v_color.a);

    gl_FragColor = color;
}