import{newSpecPage}from"@stencil/core/testing";import{PrestoPlayer}from"../presto-player";describe("presto-player",(()=>{it("renders",(async()=>{const e=await newSpecPage({components:[PrestoPlayer],html:'<presto-player video_id="1"></presto-player>'});expect(e.root).toMatchSnapshot()})),it("audio renders",(async()=>{const e=await newSpecPage({components:[PrestoPlayer],html:"<presto-player video_id=\"1\" provider='audio' ></presto-player>"});expect(e.root).toMatchSnapshot()}))}));