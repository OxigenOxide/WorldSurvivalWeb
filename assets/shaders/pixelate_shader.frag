precision mediump float;
varying vec4 v_color;
varying vec2 v_texCoord0;
uniform sampler2D u_sampler2D;
varying vec2 v_screenDim;
void main(){

    vec2 texDim = vec2(384f,216f);
    //vec2 texDim = vec2(512,288);
    //vec4 color = texture2D(u_sampler2D, v_texCoord0) * v_color;

    //vec4 color = texture2D(u_sampler2D, vec2((floor(((floor(v_texCoord0.x * texDim.x) + 0.5f) / texDim.x) * v_screenDim.x) + 0.5f) / v_screenDim.x, (floor(((floor(v_texCoord0.y * texDim.y) + 0.5f) / texDim.y) * v_screenDim.y) + 0.5f) / v_screenDim.y)) * v_color;
    vec4 color = texture2D(u_sampler2D, vec2((floor(v_texCoord0.x * texDim.x) + 0.5f) / texDim.x, (floor(v_texCoord0.y * texDim.y) + 0.5f) / texDim.y)) * v_color;
    gl_FragColor = color;
}
